+++
date = '{{ .Date }}'
draft = true
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
url = '/docs/{{ .File.ContentBaseName }}/'
+++
