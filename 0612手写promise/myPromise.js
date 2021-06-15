function MyPromise(callback) {
    const that = this;
    that.status = 'pending';
    that.value = undefined;
    that.callback = {};

    //定义resolve函数
    function resolve(value) {
        //判断状态是否是pending，如果不是,说明状态已经改变过
        if (that.status !== 'pending') {
            return;
        }

        //修改MyPromise的状态和值
        that.status = 'resolve';
        that.value = value;
        //执行then中的第一个参数，确保then已经执行过，所以讲这个参数放到异步中去执行
        setTimeout(() => {
            //并不是每一个myPromise对象后面都跟着then 所以我们要下判断这个参数存在不
            that.callback.onResolved && that.callback.onResolved(value);
        })
    }

    //定义resolve函数
    function reject(reason) {
        //判断状态是否是pending，如果不是,说明状态已经改变过
        if (that.status !== 'pending') {
            return;
        }

        //修改MyPromise的状态和值
        that.status = 'reject';
        that.value = reason;

        //执行then中的第一个参数，确保then已经执行过，所以讲这个参数放到异步中去执行
        setTimeout(() => {
            //并不是每一个myPromise对象后面都跟着then 所以我们要下判断这个参数存在不
            that.callback.onRejected && that.callback.onRejected(reason);
        })

    }

    //实例化MyPromise最后直接执行callback
    callback(resolve, reject);
}

MyPromise.prototype.then = function (onResolved, onRejected) {
    const that = this;
    //如果没写第二个参数或者第二个参数不是函数，我们自定义一个第二个参数
    onRejected= typeof onRejected==='function'?onRejected:function (reason) {
       //直接把调用then的失败的信息返回就能返回一个失败的myPromise对象
        throw reason;
    }

    //catch其实就是没有写第一个参数的then，但catch也可以接受成功的mrPromise对象
    onResolved= typeof onResolved==='function'?onResolved:function (value) {
        return  value;
    }


    //then必定返回一个myPromise对象
    return new MyPromise((resolve, reject) => {
        //封装2个函数，调用者进入决定调用哪一个
        that.callback.onResolved = function (value) {
            //分析什么情况下会返回失败的myrPromise对象
            //1，报错的情况下  2，由一个错误的myPromise对象调用的时候直接返回一个错误的myPromise对象，值和状态都与这个错误的myPromise一样
            try {
                //得到then第一个参数的返回值
                const re = onResolved(value);
                //判断re是不是myrPromise对象，不是的话返回一个成功的myPromise对象，值为re
                if (re instanceof MyPromise) {
                    //判断是否是成功的myPromise对象
                    // 在这里可以直接使用then来监听re是成功还是失败
                    re.then((data) => {
                        resolve(data)

                    }, (reason) => {
                        reject(reason);

                    })


                } else {
                    resolve(re);
                }


            } catch (e) {
                reject(e);
            }


        }



        that.callback.onRejected = function (reason) {
            //分析什么情况下会返回失败的myrPromise对象
            //1，报错的情况下  2，由一个错误的myPromise对象调用的时候直接返回一个错误的myPromise对象，值和状态都与这个错误的myPromise一样
            try {
                //得到then第一个参数的返回值
                const re = onRejected(reason);
                //判断re是不是myrPromise对象，不是的话返回一个成功的myPromise对象，值为re
                if (re instanceof MyPromise) {
                    //判断是否是成功的myPromise对象
                    // 在这里可以直接使用then来监听re是成功还是失败
                    re.then((data) => {
                        resolve(data)

                    }, (reason) => {
                        reject(reason);

                    })

                } else {
                    resolve(re);
                }


            } catch (e) {
                reject(e);
            }


        }

    })

}

MyPromise.prototype.catch=function (onRejected) {
    const that = this;
    return that.then(null,onRejected)
}


MyPromise.prototype.catch=function (onResult) {
    const that=this;


}
