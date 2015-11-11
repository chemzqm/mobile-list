build:
	@open http://localhost:3000/example/index.html
	@gulp

test:
	@webpack-dev-server 'mocha!./test/test.js' --hot --inline

test-karma:
	@karma start

doc:
	@ghp-import example -n -p
.PHONY: test
