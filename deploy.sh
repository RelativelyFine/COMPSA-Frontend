rsync --exclude-from=.gitignore -r . compsa.caslab.queensu.ca:~/frontend && \
ssh compsa.caslab.queensu.ca '~/restart_frontend.sh'