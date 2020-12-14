// function classDecorator(constructor: Function) {
//     console.log(constructor);
// }
//
// function propertyDecorator(target: any, propName: string | Symbol) {
//     console.log(target);
//     console.log(propName);
// }
//
// function methodDecorator(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
//     console.log(target);
//     console.log(propName);
//     console.log(descriptor);
// }
//
// @classDecorator
// class Component {
//     @propertyDecorator
//     name: string;
//
//     @methodDecorator
//     get componentName() {
//         return this.name;
//     }
//
//     constructor(name: string) {
//         this.name = name;
//     }
//
//     @methodDecorator
//     logName(): void {
//         console.log(`Component name: ${this.name}`);
//     }
// }

// ============================================= //

// interface ComponentDecorator {
//     selector: string;
//     template: Function;
// }
//
// function Component(config: ComponentDecorator) {
//     return function
//         <T extends { new(...args: any[]): object }>
//     (Constructor: T) {
//         return class extends Constructor {
//             constructor(...args: any[]) {
//                 super(...args);
//
//                 const el = document.querySelector(config.selector)!;
//                 el.innerHTML = config.template(...args);
//             }
//         };
//     };
// }
//
// function Bind(_: any, _2: any, descriptor: PropertyDescriptor): PropertyDescriptor {
//     const original = descriptor.value;
//
//     return {
//         configurable: true,
//         enumerable: false,
//         get(): any {
//             return original.bind(this);
//         }
//     };
// }
//
// @Component({
//     selector: '#card',
//     template: function (title: string): string {
//         return `
//             <div class="card">
//                 <div class="card-content">
//                     <span class="card-title">${title}</span>
//                 </div>
//             </div>
//         `;
//     }
// })
// class CardComponent {
//     constructor(public title: string) {
//     }
//
//     @Bind
//     logTitle(): void {
//         console.log(`Component title: ${this.title}`);
//     }
// }
//
// const card = new CardComponent('My card component');
// // card.logTitle();
//
// const btn = document.querySelector('#btn')!;
// btn.addEventListener('click', card.logTitle);

// ============================================= //

type ValidatorType = 'required' | 'email';

interface ValidatorsConfig {
    // [prop: string] ---> class name to which we apply validation
    [prop: string]: {
        // [validateProp: string] - property name
        [validateProp: string]: ValidatorType;
    };
}

const validators: ValidatorsConfig = {};

function Required(target: any, propName: string) {
    // [target.constructor.name] ---> class name
    validators[target.constructor.name] = {
        ...validators[target.constructor.name],
        [propName]: 'required'
    };
}

function validate(obj: any): boolean {
    const objectConfig = validators[obj.constructor.name];
    if (!objectConfig) {
        return true;
    }
    let isValid = true;
    Object.keys(objectConfig).forEach(key => {
        if (objectConfig[key] === 'required') {
            isValid = isValid && !!obj[key];
        }
    });
    return isValid;
}

class DecoratorForm {
    @Required
    public email: string | void;

    constructor(email?: string) {
        this.email = email;
    }
}

const form = new DecoratorForm('mail@fff.cz');

if (validate(form)) {
    console.log('Valid: ', form);
} else {
    console.log('Validation error');
}
