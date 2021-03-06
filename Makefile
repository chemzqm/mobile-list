build:
	@gulp

test:
	@webpack-dev-server 'mocha!./test/test.js' --hot --inline --debug --module-bind json --module-bind html --module-bind "css=style!css" --devtool eval

test-karma:
	@node_modules/.bin/karma start --single-run

test-coveralls:
	@echo TRAVIS_JOB_ID $(TRAVIS_JOB_ID)
	@node_modules/.bin/karma start --single-run && \
		cat ./coverage/lcov/lcov.info | ./node_modules/coveralls/bin/coveralls.js

doc:
	@ghp-import example -n -p

.PHONY: test
