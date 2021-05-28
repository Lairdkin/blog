echo "正在构建博客"
hugo 
$a = git add .
echo "开始提交"
$time = Get-Date
git commit -m "文章发布：$time"
git push
echo "提交完成"
 