#!/usr/bin/env bash

yarn install

if [ "$APPCENTER_ANDROID_VARIANT" != "qaDebug" ];
then
   yarn rnuc configs/.env.qa
fi

if [ "$APPCENTER_ANDROID_VARIANT" != "devDebug" ];
then
   yarn rnuc configs/.env.dev
fi

if [ "$APPCENTER_ANDROID_VARIANT" != "prodDebug" ];
then
   yarn rnuc configs/.env.dev
fi