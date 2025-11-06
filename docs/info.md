# Ivanka Web Stranica

## General Info

PRISTUP MAILU:
knjigovodstvobonuss@gmail.com
Lozinka : Melani1994

Također kad pristupiš vidjet ćeš u mailu da sam napravila domain na carnetu-


Link za canvu ispod:

https://www.canva.com/design/DAG36lOj1eE/pc0L07v94V4uKG1fMJBTIg/edit?utm_content=DAG36lOj1eE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
i stil u attachmentu.

da piše na webu želim ka šta ima ova jedna firma iz Zg
 https://proadeo.hr/

## Config Commands

### 🧩 1. Create ~/.gitconfig-bonuss

```bash
cat > ~/.gitconfig-bonuss <<'EOF'
[user]
	name = Bonuss
	email = knjigovodstvobonuss@gmail.com

[url "git@github-friend:"]
	insteadOf = https://github.com/
	insteadOf = git@github.com:
EOF
```

Check it

```bash
cat ~/.gitconfig-bonuss
```

### ⚙️ 2. Edit your global ~/.gitconfig

```bash
git config --global --add includeIf.gitdir:/Users/mmj/Developer/bonuss/.path ~/.gitconfig-bonuss
```

That adds this block automatically:

```ini
[includeIf "gitdir:/Users/mmj/Developer/bonuss/"]
path = ~/.gitconfig-bonuss
```


```bash
ssh-keygen -t ed25519 -C "knjigovodstvobonuss@gmail.com" -f ~/.ssh/friend-github
ssh-add --apple-use-keychain ~/.ssh/friend-github
```

Test

```bash
git config user.name
git config user.email
git remote -v
```

### 🧪 3. Verify

Pick any repo in that directory and run:

```bash
cd /Users/mmj/Developer/bonuss/some-repo
git config user.name
git config user.email
```

Expected output:

```bash
Bonuss
knjigovodstvobonuss@gmail.com
```

## Config Code

```ini
[user]
	name = Bonuss
	email = knjigovodstvobonuss@gmail.com

[url "git@github-fbonuss:"]
	insteadOf = https://github.com/
	insteadOf = git@github.com:
```

