///////////4 ===== Исправьте функцию, теряющую "this"

function askPassword(ok, fail) {
	let password = prompt("Password?", "");
	if (password == "rockstar") ok();
	else fail();
}

let user = {
	name: "Вася",

	loginOk() {
		alert(`${this.name} logged in`);
	},

	loginFail() {
		alert(`${this.name} failed to log in`);
	},
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); //исправлено тут

///////////5 ===== Использование частично применённой функции для логина

function askPassword(ok, fail) {
	let password = prompt("Password?", "");
	if (password == "rockstar") ok();
	else fail();
}

let user = {
	name: "John",

	login(result) {
		alert(this.name + (result ? " logged in" : " failed to log in"));
	},
};

askPassword(user.login.bind(user, true), user.login.bind(user, false));
//askPassword(()=> user.login(true), ()=> user.login(false));