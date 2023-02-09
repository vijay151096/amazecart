package com.amaze;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class CounterModule extends ReactContextBaseJavaModule{
    CounterModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "CounterModule";
    }

    @ReactMethod
    public void donate(Integer balance, Integer amount, Callback callBack) {
        Integer newBalance = balance + amount;
        Log.d("Native Android Counter", "donate: " + newBalance);
        callBack.invoke(newBalance);
    }
}
