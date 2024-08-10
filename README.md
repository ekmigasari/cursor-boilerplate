## NextJs

```
pnpm i next@canary react@canary react-dom@canary
```

## Eslint

```
pnpm i -D @eslint/js eslint-plugin-simple-import-sort typescript-eslint

```

## Storybook

```
pnpm dlx storybook@latest init
pnpm i tailwind-merge tailwind-variants
```

## Husky

```
pnpm dlx husky init
```

## Prettier
```
pnpm add -D prettier-plugin-tailwindcss 
```
.prettierrc
```
{
  "plugins": ["prettier-plugin-tailwindcss"],
  "tailwindFunctions": ["tv"],
  "overrides": [
    {
      "files": "*.tsx",
      "options": {
        "tabWidth": 2
      }
    }
  ],
  "printWidht": 135,
  "semi": true
}
```

## Prisma 
```
"prisma": {
    "schema": "./src/db/schema.prisma"
  },
```
