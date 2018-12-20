# Front-end Test Task
## Task

Develop SPA which should manage Equipments. A user can interact with:
 - list of Equipments (better with pagination)
 - adding Equipment (redux-form is allowed but not required)
 - Equipment editing
 - Equipment removing
 - sorted history of bids for each Equipment

Front-end part should be developed as SPA with ES6, React and Redux.
You can also use TypeScript to develop this task, but it is not required
Back-end API should be mocked.

## Data structure example
Bid 

```
{
  id: string,
  carTitle: string,
  amount: number,
  created: string
}
```

Equipment

```
{
  id: string,
  firstname: string,
  lastname: string,
  avatarUrl: string,
  email: string,
  phone: string,
  hasPremium: boolean,
  bids: Array<Bid>
}
```

## Run Project
run `npm install`

then `npm start`
