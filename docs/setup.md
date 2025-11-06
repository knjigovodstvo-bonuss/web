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

### 🔑 3. Generate SSH key for Bonuss

```bash
ssh-keygen -t ed25519 -C "knjigovodstvobonuss@gmail.com" -f ~/.ssh/bonuss-github
ssh-add --apple-use-keychain ~/.ssh/bonuss-github
```

Now copy the public key:

```bash
pbcopy < ~/.ssh/bonuss-github.pub
```

→ Paste it in GitHub under
Settings → SSH and GPG keys → New SSH key

### 🧠 4. Add SSH config entry (~/.ssh/config)

Add this block:

```ini
# --- Bonuss GitHub identity ---
Host github-fbonuss
	HostName github.com
	User git
	IdentityFile /Users/mmj/.ssh/bonuss-github
	UseKeychain yes
	AddKeysToAgent yes
```

### 🧪 5. Verify identity

In any repo under /Users/mmj/Developer/bonuss/:

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


Check your remotes:

```bash
git remote -v
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
