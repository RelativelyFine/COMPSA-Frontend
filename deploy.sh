rsync --exclude-from=.gitignore -r . compsaadmin@compsa.caslab.queensu.ca:~/frontend && \
ssh compsaadmin@compsa.caslab.queensu.ca '~/restart_frontend.sh'