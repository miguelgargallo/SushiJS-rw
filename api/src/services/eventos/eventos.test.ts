import {
  eventos,
  evento,
  createEvento,
  updateEvento,
  deleteEvento,
} from './eventos'
import type { StandardScenario } from './eventos.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('eventos', () => {
  scenario('returns all eventos', async (scenario: StandardScenario) => {
    const result = await eventos()

    expect(result.length).toEqual(Object.keys(scenario.evento).length)
  })

  scenario('returns a single evento', async (scenario: StandardScenario) => {
    const result = await evento({ id: scenario.evento.one.id })

    expect(result).toEqual(scenario.evento.one)
  })

  scenario('creates a evento', async () => {
    const result = await createEvento({
      input: {
        titulo: 'String',
        acerca: 'String',
        pelo: 'String',
        altura: 'String',
        sexo: 'String',
        when: '2022-08-30T16:34:18Z',
        prerequisitos: 'String',
      },
    })

    expect(result.titulo).toEqual('String')
    expect(result.acerca).toEqual('String')
    expect(result.pelo).toEqual('String')
    expect(result.altura).toEqual('String')
    expect(result.sexo).toEqual('String')
    expect(result.when).toEqual('2022-08-30T16:34:18Z')
    expect(result.prerequisitos).toEqual('String')
  })

  scenario('updates a evento', async (scenario: StandardScenario) => {
    const original = await evento({ id: scenario.evento.one.id })
    const result = await updateEvento({
      id: original.id,
      input: { titulo: 'String2' },
    })

    expect(result.titulo).toEqual('String2')
  })

  scenario('deletes a evento', async (scenario: StandardScenario) => {
    const original = await deleteEvento({ id: scenario.evento.one.id })
    const result = await evento({ id: original.id })

    expect(result).toEqual(null)
  })
})
