npm run build
cp -r ../dist ./
docker build -t registry.ap-southeast-1.aliyuncs.com/taisoulx/clicli:v0.0.1 ./
docker push registry.ap-southeast-1.aliyuncs.com/taisoulx/clicli:v0.0.1