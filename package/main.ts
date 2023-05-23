import inquirer from "inquirer"

const main = () => {

    const questions = [
        {
            type: 'input',
            name: 'folder',
            message: 'Qual é o nome do seu aplicativo?'
        },
        {
            type: 'list',
            name: 'lang',
            message: 'Linguagem do projeto:',
            choices: ['javascript', 'typescript']
        },
        {
            type: 'checkbox',
            name: 'test',
            message: 'Adicionais:',
            choices: ['javascript', 'typescript']
        }
    ];

    inquirer.prompt(questions).then(answers => {
        console.log('Respostas:', answers);


        
    });

}

main()