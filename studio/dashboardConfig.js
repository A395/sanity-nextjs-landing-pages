export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb5255be56f4419ea837452',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-iyfjcrd7',
                  apiId: 'bbb6fb28-52d5-4aa6-9174-1df7938a52ac'
                },
                {
                  buildHookId: '5fb5255b4c956917a0bc56b0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-zcp7ogx2',
                  apiId: 'c5e66009-9a6e-473f-8537-986897c092b1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/A395/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-zcp7ogx2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
