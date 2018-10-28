import {BY_CODE, BY_NAME, SearchCriteria} from '../actions/search';
import purepuc from './purepuc.json';
import completepuc from './completepuc.json';

interface Class extends GeneralAccount {
    groups: Group[]
}

interface Group extends GeneralAccount {
    accounts: Account[]
}

interface Account extends GeneralAccount {
    subs: SubAccount[]
}

interface SubAccount extends GeneralAccount {
    aux: GeneralAccount[]
}

interface GeneralAccount {
    code: number,
    name: string,
    description: string,
    subname?: string,
}

const pureToComplete = (pureAccount: GeneralAccount): Class | Group | Account | SubAccount | GeneralAccount | undefined => {
    const codeString: string = pureAccount.code.toString();
    const codeClass: number = parseInt(codeString.substr(0, 1));
    const completeClass: Class = completepuc.find(
        (c: Class) => c.code === codeClass
    ) as Class;
    switch (codeString.length) {
        case 1:
            return completeClass;
        case 2:
            return completeClass.groups.find(
                (g: Group) => g.code === parseInt(codeString.substr(0, 2))
            );
        case 4:
            return (completeClass.groups.find(
                (g: Group) => g.code === parseInt(codeString.substr(0, 2))
            ) as Group).accounts.find(
                (a: Account) => a.code === parseInt(codeString.substr(0, 4))
            );
        case 6:
            return ((completeClass.groups.find(
                (g: Group) => g.code === parseInt(codeString.substr(0, 2))
            ) as Group).accounts.find(
                (a: Account) => a.code === parseInt(codeString.substr(0, 4))
            ) as Account).subs.find(
                (s: SubAccount) => s.code === parseInt(codeString.substr(0, 6))
            );
        default:
            return (((completeClass.groups.find(
                (g: Group) => g.code === parseInt(codeString.substr(0, 2))
            ) as Group).accounts.find(
                (a: Account) => a.code === parseInt(codeString.substr(0, 4))
            ) as Account).subs.find(
                (s: SubAccount) => s.code === parseInt(codeString.substr(0, 6))
            ) as SubAccount).aux.find(
                (g: GeneralAccount) => g.code === pureAccount.code
            );
    }
};

const search = (code: string, searchCriteria: SearchCriteria): GeneralAccount[] => {
    if (code == null || code === '') return [];
    switch (searchCriteria) {
        case BY_CODE:
            const codeString: string = code.toString();
            const n: number = codeString.length;
            return purepuc.filter(
                (account: GeneralAccount) => {
                    const codeString2: string = account.code.toString();
                    const n2: number = codeString2.length;
                    if (n2 < n)
                        return false;
                    else
                        return codeString === codeString2.substr(0, n);

                }
            );
        case BY_NAME:
            return purepuc.filter(
                (account: GeneralAccount) => {
                    return account.name.toLowerCase().includes(code.toLowerCase());
                }
            );
        default:
            return [];
    }
};

export {purepuc, completepuc, GeneralAccount, Class, Group, Account, SubAccount, search, pureToComplete};
