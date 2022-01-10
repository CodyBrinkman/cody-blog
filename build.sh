#!/bin/sh

npm run build
sudo rm -rf /mnt/blog.elcaroydoc.com/html/
sudo mv build /mnt/blog.elcaroydoc.com/html/
sudo semanage fcontext -a -t httpd_sys_content_t "/mnt/blog.elcaroydoc.com/html(/.*)?"
sudo restorecon -Rv /mnt/blog.elcaroydoc.com/html/
sudo systemctl restart httpd
