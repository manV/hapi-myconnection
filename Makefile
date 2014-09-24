test:
	@node node_modules/lab/bin/lab -l
test-cov:
	@node node_modules/lab/bin/lab -t 100 -l
test-cov-html:
	@node node_modules/lab/bin/lab -r html -o coverage.html

.PHONY: test test-cov test-cov-html