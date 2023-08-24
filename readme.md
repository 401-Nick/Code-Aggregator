### Code Aggregator

Code Aggregator is a command-line tool that scans a specified directory and aggregates the contents of files with specific types into an output file.

#### Installation

To install Code Aggregator, run the following command:

```bash
npm install -g code-aggregator
```

After installation, `code-aggregator` will be available to use in any package.

#### Usage

You can use the Code Aggregator tool with the following command-line options:

1. **-d, --directory**: Directory to scan (default: './').
2. **-t, --fileTypes**: File types to include (default: ['.js', '.html']).
3. **-o, --output**: Output file name (default: 'dirContents.txt').

#### Example

To scan the current directory for JavaScript and HTML files and output the contents to a file named `myOutput.txt`, run the following command:

```bash
code-aggregator --directory ./ --fileTypes .js .html --output myOutput.txt
```

#### Help

You can access the help menu for more information by running:

```bash
code-aggregator --help
```