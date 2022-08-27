# robot-toy

Robot toy made to make wife happy

It is recommended to have a programmer husband or wife or boyfriend or girlfriend to use it

## Feature

- Support Dingtalk
- Support Wecom
- Use NestJS to do cron timing tasks


## Packages

`@robot-toy/shared`：Packaging for some third-party push APIs

`@robot-toy/pusher`：Push messaging service made with NestJS and 👆

## Environment configuration

add `.env` to `robot-toy/pusher/`

```
# 钉钉机器人AppKey
DINGTALK_ROBOT_APP_ID =
# 钉钉机器人AppSecret
DINGTALK_ROBOT_APP_SECRET =
# 消息推送的用户id
DINGTALK_USERIDS = ['','']

# 企业AgentId
WECOM_ID =
# 企业应用id
WECOM_APP_ID =
# 企业应用密钥
WECOM_APP_SECRET =

# 应用密钥
TIAN_APP_SECRET =
# 城市
CITY =
# 认识的时间
TIME_OF_KNOWING =
```
