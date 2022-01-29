# inventory-management



### Generate new SSH key
---

```
$ ssh-keygen -t ed25519 -C "your_email@example.com"
```
Note: for legacy system that does not support Ed25519
```
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
you can use passphrase for added security for when someone gets access to your system

## Adding SSH key to ssh-agent
---

Check for existing ssh keys before adding a new one to the ssh-agent to manage.
```
# start the ssh-agent in the background
$ eval "$(ssh-agent -s)"
> Agent pid 59566
```
add your private key to ssh-agent
```
$ ssh-add ~/.ssh/id_ed25519
```

### Adding SSH key to your GitHub account\
---

copy the ssh keys 
```
# Copies the contents of the id_ed25519.pub file to your clipboard
$ clip < ~/.ssh/id_ed25519.pub
```
Goto GitHub account in the browser and Paste it in [Profile Icon]/ Settings/ SSH and GPG keys.

### Check existing ssh keys
---

```
$ ls -al ~/.ssh
# Lists the files in your .ssh directory, if they exist
```

-   id_rsa.pub
-   id_ecdsa.pub
-   id_ed25519.pub