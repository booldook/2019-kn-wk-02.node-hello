# git 설치
## git-scm.com 으로 이동하여 다운로드 후 설치

# Node.js 설치 - npm 명령도 설치됨
## 1. nodejs.org 이동하여 LTS버전 다운로드 후 설치
## 2. 프로젝트 폴더로 이동하여 프로젝트 폴더를 생성
## 3. vscode를 사용하여 폴더열기
## 4. 터미널 창에서
~~~
npm init -y
~~~
## 5. express 설치
~~~
npm i express
~~~
## 6. supervisor.js 글로벌 옵션으로 설치 - **node app**을 매번 실행하는 불편을 덜어주는 모듈 (개발 머신에서 한번만 실행)
~~~
npm i -g supervisor
~~~
## 7. .gitignore를 꼭 생성하자 gitignore.io 에서 자동생성 사용

## 8. express-generator 설치
~~~
npm i -g express-generator
~~~
### 가. 작업할 폴더가 생성될 폴더로 이동하여 실행 (자동으로 폴더를 생성함)
~~~
express --view=pug 03.sample
~~~
### 나. bin/www 파일을 열고
~~~js
server.listen(post);
server.listen(post, function(){
  console.log(`http://127.0.0.1:${port}`);
});
~~~
### 다. 터미널 창에서
~~~
supervisor bin/www
~~~
