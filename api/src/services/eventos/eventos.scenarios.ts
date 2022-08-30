import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.EventoCreateArgs>({
  evento: {
    one: {
      data: {
        titulo: 'String',
        acerca: 'String',
        pelo: 'String',
        altura: 'String',
        sexo: 'String',
        when: '2022-08-30T16:34:18Z',
        prerequisitos: 'String',
      },
    },
    two: {
      data: {
        titulo: 'String',
        acerca: 'String',
        pelo: 'String',
        altura: 'String',
        sexo: 'String',
        when: '2022-08-30T16:34:18Z',
        prerequisitos: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
