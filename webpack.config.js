//used destructing to get mode out of env object (3)
// enhanced object literals ES6 feature where {mode} is same as {mode : mode}

module.exports = ({mode}) => {
    console.log(mode);
    return{
        mode ,
        output: {
            filename: "bundle.js"
        }
    };
}