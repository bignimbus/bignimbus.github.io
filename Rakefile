require "rubygems"
require "tmpdir"
require "bundler/setup"
require 'html-proofer'
require "jekyll"


# Change your GitHub reponame
GITHUB_REPONAME = "bignimbus/bignimbus.github.io"

desc 'Optimize images'
task :optimize_images do
  system 'mogrify -resize "800" ./assets/images/featured/*.jpg'
  system 'mogrify -resize "800" ./assets/images/featured/*.png'
  system 'mogrify -resize "x100" -path ./assets/images/featured/thumbnails/ ./assets/images/featured/*.jpg'
  system 'mogrify -resize "x100" -path ./assets/images/featured/thumbnails/ ./assets/images/featured/*.png'
end

desc "Generate blog files"
task :generate do
  Jekyll::Site.new(Jekyll.configuration({
    "source"      => ".",
    "destination" => "_site"
  })).process
end

task :test do
  HTMLProofer.check_directory("./_site",
    assume_extension: true,
    http_status_ignore: [999, 0],
    file_ignore: [/\d\d\d\.html/],
    url_ignore: [/https?:\/\/bignimbus\.github\.io.*/]
  ).run
end

desc "Generate and publish blog to gh-pages"
task :publish => [:generate, :test] do
  Dir.mktmpdir do |tmp|
    cp_r "_site/.", tmp

    pwd = Dir.pwd
    Dir.chdir tmp

    system "git init"
    system 'git config --global user.email "jdauriemma@gmail.com"'
    system 'git config --global user.name "Jeff Auriemma"'
    system "git remote add origin https://github.com/#{GITHUB_REPONAME}.git"
    system "git checkout -b staging-build"
    system "git add ."
    message = "Site updated at #{Time.now.utc}"
    system "git commit -m #{message.inspect}"
    system "git fetch"
    system "git merge -s ours origin/staging-build --no-edit"
    system "git push origin staging-build"

    Dir.chdir pwd
  end
end
