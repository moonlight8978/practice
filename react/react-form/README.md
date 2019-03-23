Comparasion between PureComponent, Component and Functional Stateless Component

##### Setup

```shell
$ yarn install && yarn dev
```

##### Note

* Turn on the dev console

```txt
<Dump /> no.1 was rendered
<UsingPureComponent /> no.1 was rendered
<UsingComponent /> no.1 was rendered
<Dump /> no.2 was rendered
<UsingPureComponent /> no.2 was rendered
<UsingComponent /> no.2 was rendered
```

=> Initial rendering

*	Type `abc` to first input

```txt
3 <Dump /> no.1 was rendered
```

=> Functional Stateless Component re-rendered

* Do the same with second input

=> Nothing happens

=> Functional Stateless Component didn't re-render

=> `children` props magic ?! **Maybe** React did shallow comparasion on `children`

