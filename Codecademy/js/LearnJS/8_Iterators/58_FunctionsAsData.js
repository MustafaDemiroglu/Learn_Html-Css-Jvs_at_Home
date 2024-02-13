const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
};

const busy = announceThatIAmDoingImportantWork;

busy(); // This function call barely takes any space!
