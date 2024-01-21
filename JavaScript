############################################################ JavaScript ################################################################################

================ this ==================

En JavaScript, le mot-clé this fait référence à l'objet sur lequel une fonction est appelée. Le comportement de this dépend de la manière dont la fonction est appelée.
Voici quelques règles générales pour comprendre le comportement de this :

Dans une fonction régulière : Le this dépend de la manière dont la fonction est appelée. Si la fonction est appelée en tant que méthode d'un objet, this fera référence à cet objet. Si la fonction est appelée en tant que fonction autonome, this peut faire référence à l'objet global (comme window dans un navigateur) ou à undefined en mode strict ("use strict").

function exemple() {
    console.log(this);
}

exemple(); // this dépend du contexte d'appel, peut être window ou undefined en mode strict

---------------------

Dans une méthode d'objet : Le this fait référence à l'objet sur lequel la méthode est appelée.

const objet = {
    propriete: "valeur",
    methode() {
        console.log(this);
    }
};

objet.methode(); // this fait référence à l'objet "objet"

-------------------------

Dans une fonction fléchée : Contrairement aux fonctions régulières, les fonctions fléchées n'ont pas leur propre this. Elles capturent la valeur de this à l'endroit où elles sont définies.

const exemple = () => {
    console.log(this);
};

exemple(); // this dépend du contexte d'encapsulation, pas du contexte d'appel


----------------------------

Il est important de comprendre le comportement de this dans différents contextes, car cela peut avoir un impact sur le fonctionnement des fonctions, en particulier lors de l'utilisation de fonctions en tant que méthodes d'objets, callbacks, ou constructeurs d'objets.


############################################################# => ##############################################################################################


L'opérateur => est appelé "fonction fléchée" (arrow function) en JavaScript. C'est une syntaxe plus concise pour déclarer des fonctions. Elle a été introduite dans ECMAScript 6 (ES6) pour fournir une manière plus concise et souvent plus lisible de définir des fonctions.

Dans le contexte de tab.forEach((valeur, index) => { console.log(valeur, index); });, (valeur, index) => { console.log(valeur, index); } est une fonction fléchée utilisée comme fonction de rappel (callback) pour la méthode forEach.

La syntaxe de la fonction fléchée est la suivante :

(paramètres) => { instructions }

Dans ce cas, (valeur, index) => { console.log(valeur, index); } prend deux paramètres, valeur et index, et exécute les instructions à l'intérieur des accolades, qui consiste à afficher ces deux valeurs à l'aide de console.log.

La fonction fléchée a quelques avantages par rapport à la syntaxe de fonction classique :

Syntaxe concise : Elle permet d'écrire des fonctions de manière plus concise.
Pas de liaison du this : La valeur de this est capturée à la création de la fonction, ce qui évite certains problèmes liés à la liaison dynamique de this dans les fonctions classiques.
Il est important de noter que bien que les fonctions fléchées soient utiles dans de nombreux cas, elles ne conviennent pas à toutes les situations, en particulier lorsqu'une fonction nécessite son propre this ou lorsqu'elle est utilisée comme constructeur d'objet.
