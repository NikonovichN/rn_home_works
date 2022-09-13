echo "Installing yarn dependencies..."
yarn install

echo "Generating config files.. ENVIRONMENT_VARIABLE $ENVIRONMENT_VARIABLE"
if ["$ENVIRONMENT_VARIABLE" == 'stories'];
  then yarn rnuc configs/.stories.dev
fi

if ["$ENVIRONMENT_VARIABLE" == 'qa'] 
  then yarn rnuc configs/.dev.dev
fi

if ["$ENVIRONMENT_VARIABLE" == 'dev'] 
  then yarn rnuc configs/.dev.dev
fi