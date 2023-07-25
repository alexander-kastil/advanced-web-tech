import * as lodash from 'lodash';

export class ObjectDemos {
    objectsBasics() {
        // Plain old JavaScript -> anti pattern
        var myPerson = new Object();
        // myPerson.smile = function () { console.log('smile') };

        var otherPerson = <any>{};
        otherPerson.smile = function () { console.log('smile') };

        let person: any = { Id: 1, Name: 'Giro' };
        person.walk = () => console.log(`I am ${person.Name} and I'm walking`);

        person.walk();
    }

    enhancedObjectLiterals() {
        //Property value shorthand
        function getCarES5(make, model, value) {
            return {
                make: make,
                model: model,
                value: value,
            };
        }

        function getCar(make, model, value) {
            // replace make: make ...
            return {
                make,
                model,
                value,
            };
        }

        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

        const dontDoThis = { ...arr }
        const arrClone = [...arr]

        function getPersonClone(person: { Id: number; Name: string, Address: { Street: string } }) {
            // and create a shallow clone of the object	        
            person.Address.Street = 'Hauptstrasse 2';
            return { ...person };
        }

        let martin: any = {
            Id: 1, Name: 'Martin', Address: {
                Street: 'Hauptstrasse 1',
            }
        };
        let job = { job: 'dev dude' };
        let martinWithJob = { ...martin, ...job };

        var cloned = getPersonClone(martin);
        console.log('original', martin); // { Id: 1, Name: 'Martin', Address: { Street: 'Hauptstrasse 2' } }

        //Method definition shorthand
        function getBusES5(value) {
            return {
                depreciate: function () {
                    this.value -= 2500;
                },
            };
        }

        function getBus(value) {
            return {
                // Method definition shorthand syntax
                // omits `function` keyword & colon
                depreciate() {
                    this.value -= 2500;
                },
            };
        }
    }

    destructuring() {
        let fullPerson = { firstName: 'John', name: 'Doe', age: 17 };
        let { firstName, name } = fullPerson;
        // shorthand for this:
        // let firstName = fullPerson.firstName;
        // let name = fullPerson.name;

        console.log(firstName + ', ' + name);
    }

    impFunction() {
        var name = 'Sandra';

        function greet(age: number) {
            name += `, how are you today? Your are ${age} years old`;
            console.log(name);
        }

        greet(14);

        name = 'Sabine';
        greet(14);
    }

    pureFunction() {
        function greet(age: number, name: string) {
            return `${name}, how are you today? Your are ${age} years old`;
        }

        console.log(greet(14, 'Sandra'));
        console.log(greet(24, 'Heinz'));
    }

    objAssign() {
        const giro = { name: 'Giro', age: 13 };

        // shallow object cloning -> object componsition on a new object: {}
        const clone = Object.assign({}, giro, {
            birth: new Date(),
        });

        // object composition
        const copy = Object.assign(giro, { birth: new Date() });
        console.log('is this a copy or a clone?', clone);
    }

    valref() {
        let person: any = { Id: 1, Name: 'Martin' };
        let myNumber: number = 100;

        function passArgs(nbr: number, pers: any) {
            nbr += 1;
            pers.Name = 'Giro';
        }

        passArgs(myNumber, person);
        console.log('result for myNumber & person:', myNumber, person);

        myNumber = 500;
        person.Name = 'Martin';
        passArgs(myNumber, Object.assign({}, person));
        console.log('result for myNumber & person using Object.assign():', myNumber, person);

        passArgs(myNumber, { ...person });
        console.log('result for myNumber & person using spread:', myNumber, person);
    }

    copyspread() {
        //Spred operator on arrays
        var [x, y, ...remaining] = [1, 2, 3, 4];
        console.log(x, y); // 1, 2,
        console.log(remaining);

        //Spread operator on objects
        var simplePerson = { name: 'Giro' };
        var dataPerson = {
            birth: new Date(),
            job: 'dev dude',
        };
        console.log({ ...dataPerson });

        var person = { ...simplePerson, ...dataPerson };
        console.log(person);
    }

    manualCloning() {
        let p = {
            name: 'Alexander ',
            dogs: [
                { dogname: 'Soi', breed: 'Whippet' },
                { dogname: 'Giro', breed: 'Galgo Espanol' },
            ],
        };

        function iterationCopy(src): { name: string; dogs: { dogname: string; breed: string }[] } {
            let target: any = {};
            for (let prop in src) {
                if (src.hasOwnProperty(prop)) {
                    target[prop] = src[prop];
                }
            }
            return target;
        }

        let copyPerson = iterationCopy(p);

        copyPerson.name = 'Martin';
        copyPerson.dogs[0].dogname = 'Soitscherl';

        console.log('Original', p);
        console.log('Copied', copyPerson);
    }

    lodashCloning() {
        let p = {
            name: 'Giro ',
            dogs: [
                {
                    dogname: 'Soi',
                    breed: 'Whippet',
                    dob: new Date(),
                    bark: () => console.log('barking'),
                },
                { dogname: 'Giro', breed: 'Galgo Espanol' },
            ],
        };

        let copyPerson = lodash.cloneDeep(p);

        copyPerson.name = 'Martin';
        copyPerson.dogs[0].dogname = 'Soitscherl';

        console.log('Original', p);
        console.log('Copied', copyPerson);
    }
}
