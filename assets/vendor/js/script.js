$(function () {
    const users = [{ id: 1, nom: 'jean', prenom: 'pierre', age: '25' }];
    $('#valider').on('click', function () {
        //    e.preventDefault();
        const enterUserData = {
            //on recupère l'id de chaque users
            //on recupère ici les valeurs entrer par users
            id: users.length !== 0 ? users[users.length - 1].id + 1 : 1,
            nom: $('#nom').val(),
            prenom: $('#prenom').val(),
            age: $('#age').val(),

        };


        //on verifie si users à bien remplire les champs

        if (
            enterUserData.nom !== '' &&
            enterUserData.prenom !== '' &&
            enterUserData.age !== '') {
            //on ajoute users dans notre tableau 
            users.push(enterUserData);
            showAllUsers();
            updateorDeleteUser();

            //cette fonction va nous permettre de suprimer et de modifier les infos de chaque users
            function updateorDeleteUser() {
                const deleteButtons = document.querySelectorAll(".Suprimer"); //on recupère tout les bouttons suprimer
                const editeButtons = document.querySelectorAll(".Modifier");

                //on ajoute ici un evènement qui va detecterlorsque chaque boutton aura été cliquer
                deleteButtons.forEach((button) => button.addEventListener('click', () => deleteUser(button.id)));
                deleteButtons.forEach((button) => button.addEventListener('click', () => editeUser(button.id)));

            }            /*
            users.forEach((user => {
                const block = $(`
                    <div id=${user.id}>
                        <input type="text" value=${user.nom} >
                        <input type="text" value=${user.prenom} >
                        <input type="text" value=${user.age} id="">
                        <button type="button" style="color:red"><i class="fas fa-edit"> </i></button>
                        <button type="button" style="color:blue"><i class="fas fa-trash"> </i></button>
                    </div>
                    `);
                $('#AllUsers').append(block); //ici affiche newDiv

            }));

            */
            //fonction pour afficher tout les users


        };

        function showAllUsers() {
            document.getElementById('AllUsers').innerHTML = "";
            users.forEach((user) => {
                const newInputs = {
                    Nom: document.createElement('input'),
                    Prenom: document.createElement('input'),
                    Age: document.createElement('input'),
                };
                const newDiv = document.createElement('div');

                const newButtons = {
                    Modifier: document.createElement('input'),
                    Suprimer: document.createElement('input'),
                };
                //On parcour les inputs et on recupère tout les valeurs
                for (const [key, value] of Object.entries(newInputs)) {

                    //on  attribut ici une nouvelle valeure à chaque input
                    value.setAttribute('type', 'text');

                    //Ici on attribut un id à chaque input pour identifier son contenu
                    //value.setAttribute('id', key + 'OfUser' + user.id);
                    value.setAttribute('id', `${key}OfUser${user.id}`);

                    //on attribut à chaque input qui se trouve dans notre objet newInput une valeur
                    key === 'Nom' && value.setAttribute('value', user.nom);
                    key === 'Prenom' && value.setAttribute('value', user.prenom);
                    key === 'Age' && value.setAttribute('value', user.age);

                    newDiv.appendChild(value); //On ajoute la valeur de chaque input dans le div
                };
                $('#AllUsers').append(newDiv); //ici affiche newDiv
                console.log(newDiv);

                for (const [key, value] of Object.entries(newButtons)) {
                    value.setAttribute('type', ' button');
                    value.setAttribute('class', key);
                    value.setAttribute('id', user.id);
                    value.setAttribute('value', key);
                    newDiv.append(value)

                }
            });
        };

        updateorDeleteUser();

        function deleteUser(id) {
            users.forEach((user) => {
                const userPositionInArray = users.indexOf(user);
                user.id === parseInt(id) && users.splice(userPositionInArray, 1);
            });
            showAllUsers();
        }

        function editeUser(id) {
            const newInput = {
                nom: document.getElementById(`NomOfUser${id}`).value,
                prenom: document.getElementById(`PrenomOfUser${id}`).value,
                age: document.getElementById(`AgeOfUser${id}`).value,
            };
            //on recupère chaque id et on verifie s'll corespond à l'id passer en parametre
            users.forEach((user) => {
                if (user.id === parseInt(id)) {
                    user.nom = newInput.nom;
                    user.prenom = newInput.prenom;
                    user.age = newInput.age;
                }
            });
            console.log(users);
        };
    });

});