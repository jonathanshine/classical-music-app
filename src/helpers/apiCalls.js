const serverURL = "http://localhost:5000";

export const SignUpUser = async (data) => {
    try {
        const res = await( await fetch(`${serverURL}/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( data ),
            credentials: "include"
        })).json();
        return res;
    } catch (error) {
        return error;
    };
};

export const SignInUser = async (data) => {
    try {
        const res = await( await fetch(`${serverURL}/users/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
            credentials: "include"
        })).json();
        return res;
    } catch (error) {
        return error;
    };
};

export const authenticateUser = async () => {
  console.log("trying to auth cookie");
  try {
    const res = await (
      await fetch(`${serverURL}/users/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
      })
    ).json();
    return res;
  } catch (error) {
    return error;
  }
};