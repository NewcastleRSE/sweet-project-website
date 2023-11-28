d# The SWEET Project Website

## About

The SWEET Project: Providing protection, safeguarding, empowerment, problem-solving skills and support.

### Project Team

Professor Linda Sharp ([linda.sharp@ncl.ac.uk](linda.sharp@ncl.ac.uk))

Professor Eila Watson, Oxford Brookes University([ewatson@brookes.ac.uk](mailto:ewatson@brookes.ac.uk))

### RSE Contact

Mark Turner
RSE Team  
Newcastle University  
([mark.turner@newcastle.ac.uk](mailto:mark.turner@newcastle.ac.uk))

## Built With

This project is built with Jekyll and Tailwind CSS

[Jekyll](https://jekyllrb.com)  
[Tailwind CSS](https://tailwindcss.com)

## Getting Started

This is the repository for The SWEET Project. The majority of data that's being displayed on the website can be edited using the "data.yml" file.

## Running the project locally

1. Git clone the repo to your local machine.
2. Install Ruby globally, if you have already installed Ruby then skip to step 6. If you're having permissions issues on step 9 then uninstall Ruby and continue from here. I'd recommend installing [chruby](https://github.com/postmodern/chruby) and [ruby-install](https://github.com/postmodern/ruby-install) over just Ruby. This gives you more freedom to switch between versions and fixes a lot of permission issues you could possibly have with Ruby. To install with homebrew, run `brew install chruby ruby-install`.
3. Install the latest stable ruby version `ruby-install --latest ruby`.
4. If you're not using macOS then add these lines `source /usr/local/share/chruby/chruby.sh` to your shell of choice. If you are using macOS, add these lines `source /opt/homebrew/opt/chruby/share/chruby/chruby.sh source` `/opt/homebrew/opt/chruby/share/chruby/auto.sh` to your shell of choice. If you're using bash, it should be ~/.bash_profile (or ~/.bashrc on some systems). If you're using zsh, it should be ~/.zshrc. Save changes and restart the terminal. These just enable chruby commands to be run in your shell.
5. Run `ls /opt/homebrew/opt/chruby/share/chruby/chruby.sh ls /opt/homebrew/opt/chruby/share/chruby/auto.sh` to check these lines exist.
6. Open the repo folder in your IDE of choice.
7. Open the terminal. Ensure the terminal is pointing to your repo directory.
8. If you completed step 2, run `chruby 3.2.2`, else skip this step. 3.2.2 is the latest stable release at the time of writing this and the version of ruby that was installed during step 3. You can check it's the most up to date release [here](https://www.ruby-lang.org/en/downloads/releases/) or by running `ruby-install -U`. Just replace 3.2.2 with the version that was installed during step 3.
9. Run `gem install jekyll bundler`.
10. Run `bundle install`.
11. Run `bundle exec jekyll serve` to start the project locally at locahost:4000.

#### Location of the data file

data.yml file can be located inside \_data folder. The complete path is : \_data/data.yml

#### Contents of the file

data.yml file have different contents that when changed, will update the live website to reflect the changes. Currently, the following content can be edited and updated:

1. Hero Section: This is first section of the page. Usually gives a high level introduction about the project. This section has a heading, a small paragraph right below the heading and the text that should appear on the button.

2. Team Members: Information about the team members. Each team member includes data regarding
<pre>
   name
   title
   affiliation
   imageUrl
   blurb
</pre>

3. About the Project

4. Workstreams: Each workstream have the following information
<pre>
    name
    title
    description
</pre>

5. Public Involvement:
Public involvement section has the following data
<pre>
name
title
blurb
img
</pre>

6. Contact Us

### Editing information using github

1. Visit the github URL and locate the data.yml file.

<pre>The file can be found by clicking on _data and then clicking on data.yml file</pre>

2. Once file is open in github, Click on the **edit icon** on the right hand side. The file should now be editable.

3. Make the necessary changes.

4. Click on the green highlighted button **Commit Changes** and a popup should appear with the fields commit message and extended description.
<pre>The commit message field is a short description for describing the changes in the file. 
       For example, if the contact information is edited, an appropriate commmit
       message would be "Edited the contact information"</pre>
5. Click on commit changes. The website should now be updated. It usually takes ~5 minutes for the changes to go live.

### Prerequisites

Any tools or versions of languages needed to run code. For example specific Python or Node versions. Minimum hardware requirements also go here.

### Installation

How to build or install the applcation.

### Running Locally

How to run the application on your local system.

### Running Tests

How to run tests on your local system.

## Deployment

### Local

Deploying to a production style setup but on the local system. Examples of this would include `venv`, `anaconda`, `Docker` or `minikube`.

### Production

Deploying to the production system. Examples of this would include cloud, HPC or virtual machine.

## Usage

Any links to production environment, video demos and screenshots.

## Roadmap

- [x] Initial Research
- [ ] Minimum viable product <-- You are Here
- [ ] Alpha Release
- [ ] Feature-Complete Release

## Contributing

### Main Branch

Protected and can only be pushed to via pull requests. Should be considered stable and a representation of production code.

### Dev Branch

Should be considered fragile, code should compile and run but features may be prone to errors.

### Feature Branches

A branch per feature being worked on.

https://nvie.com/posts/a-successful-git-branching-model/

## License

## Citation

Please cite the associated papers for this work if you use this code:

```
@article{xxx2023paper,
  title={Title},
  author={Author},
  journal={arXiv},
  year={2023}
}
```

## Acknowledgements

This work was funded by a grant from the UK Research Councils, EPSRC grant ref. EP/L012345/1, “Example project title, please update”.
