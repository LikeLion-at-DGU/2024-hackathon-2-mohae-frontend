# 2024 Hackathon 2 Mohae Frontend

안녕하신가 프론트 baby들(?)

김연진: KYJ
강근우: KGW
오태준: OTJ



<✨ 기본 워크플로우>
: 각자가 자신의 브랜치에서 작업한 후에 'main' 브랜치로 병합하는 방식을 사용할겁니다.

1. 각자 브랜치에서 작업
2. 브랜치 업데이트 및 커밋
3. 브랜치 푸시
4. 병합 전 main 브랜치 업데이트
5. 병합
6. 병합 결과 푸시



<✨ 자세한 명령어 사용 방법>
: KYJ 브랜치로 예시 설명

1. 각자 브랜치에서 작업

git checkout KYJ
# 작업 수행 (코드 작성, 파일 수정 등)

git add .
git commit -m "작업 내용 설명"
# 작업 내용 설명은 fix, feat 등을 이용해서 구체적으로 쓸 것

git push origin KYJ
# 자신의 브랜치로 먼저 push하기

2. main 브랜치 업데이트 작업

git checkout main
git pull origin main
# 꼭 병합하기 전에 pull먼저 받아서 최신사항 업데이트할 것

git merge KYJ
# 충돌이 발생한 경우 파일을 수정하고 (병합편집기 사용 모르겠는 분은 한번 하기 전에 저한테 보여주심 알려드릴게요옹)
git add .
git commit -m "충돌 해결"

git push origin main
# main 브랜치에 병합이 완료되면, 이를 원격 저장소에 푸시



<✨ 명령어 순서대로만 모음>
git checkout KYJ
git add .
git commit -m "작업 내용 설명"
git push origin KYJ
git checkout main
git pull origin main
git merge KYJ
git add .
git commit -m "충돌 해결"
git push origin main



<✨ chat gpt가 알려주는 병합 충돌 방지 및 해결>
작업을 자주 푸시하고 병합하기: 각자 작업 내용을 자주 푸시하고 main 브랜치의 최신 내용을 자신의 브랜치에 자주 병합하는 것이 좋습니다. 이렇게 하면 충돌을 더 작은 단위로 해결할 수 있습니다.



<🚀 커밋 규칙 (Commit Convention)>
커밋 유형	설명
feat	새로운 기능 추가
fix	    버그 수정
docs	문서 수정
style	코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우
refactor	코드 리팩토링
test	테스트 코드, 리팩토링 테스트 코드 추가
chore	패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore
design	CSS 등 사용자 UI 디자인 변경
comment	필요한 주석 추가 및 변경
rename	파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우
remove	파일을 삭제하는 작업만 수행한 경우
!BREAKING CHANGE	커다란 API 변경의 경우
!HOTFIX	급하게 치명적인 버그를 고쳐야 하는 경우