# Course on Udemy:

## Vue 3 Mastery: Firebase & More - Learn by Doing!

`npm install -g @vue/cli`

`vue create sfc`

## Select Options

```
1. Manually select features
2. Babel, Linter/Formatter
3. 3.x
4. EsLint + Prettier
5. Lint on save
6. In dedicated config files
7. No
```

---

## Trying to fix this: `npm run serve`

```
npm install vue
npm install -g @vue/cli
npm install -g @vue/cli-service
```

```
npm install --save-dev @vue/cli-service
```

```
npm install vue-template-compiler --save-dev
npm install -g @vue/cli-service
npm install -g @vue/cli
```

```
npm install --save-dev vue-loader@next
npm install -D vue-loader@15.9.3 vue-template-compiler@2.6.12
```

<h3 style="color: red">
The directory had a ! sign, that I deleted
But <i><b>
vue-cli-service serve</b></i>
 doesn't work anyway
</h3>

---

## It's usefull to check things:

```
vue ui
```

## This doesn't work:

```
npm run serve
vue-cli-service serve
```

---

## But this works fine:

```
./node_modules/.bin/vue-cli-service serve
```

---

## Para formatear con formato LINT, al finalizar de copiar codigo de proyecto anterior

```
./node_modules/.bin/vue-cli-service lint
```
