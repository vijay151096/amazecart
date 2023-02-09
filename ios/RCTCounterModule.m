//
//  RCTSampleModule.m
//  DemoEnv
//
//  Created by P M Mohamed Jaseem Jabir on 08/02/23.
//

//#import <Foundation/Foundation.h>

// RCTSampleModule.m
#import "RCTCounterModule.h"
#import <React/RCTLog.h>

@implementation RCTCounterModule

// To export a module named RCTSampleModule
RCT_EXPORT_MODULE();


RCT_EXPORT_METHOD(donate:(NSInteger )arg1 arg2:(NSInteger )arg2 callback:(RCTResponseSenderBlock)callback)
{
   NSInteger result = (arg1 + arg2);
  RCTLogInfo(@"Result is %@", @(result));
  callback(@[@(result)]);
}

@end

