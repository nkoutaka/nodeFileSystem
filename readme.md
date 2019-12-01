# nodeFileSystem
A collection of scripts that operate on local files using Nodejs.

## Description
### listUpFiles
A script that recursively retrieves files under a specific directory and creates a list of file names (file paths).

### deleteFiles
A script that deletes the file with the specified path.

### changeLines
A script that recursively retrieves files under a specific directory and corrects them line by line.

### grepFiles
A script that recursively retrieves files under a specific directory and lists the files that contain each keyword.

## ✅ Requirements
- Nodejs v12.1.0

Install Nodejs:

```bash
$ brew install nodebrew
$ nodebrew install-binary latest
$ nodebrew use v12.1.0
$ echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.bash_profile
```

## 🚀 Usage

Change the current directory 'nodeFileSystem'.

```bash
$ cd nodeFileSystem
```

Execute following command.

```bash
$ node listUpFiles
```

## 🤝 Contributing
Contributions, issues and feature requests are welcome.

## 👤 Author
- Twitter: [@HighHawk5](https://twitter.com/HighHawk5)

## ⭐️ Show your support
Please STAR this repository if this software helped you!

## 📝 License
This software is released under the MIT License.
