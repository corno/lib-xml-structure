import * as pd from 'pareto-core-data'

import {
    aExternalInterfaceReference,
    aInterface,
    aInterfaceMethod,
    aInterfaceReference,
    array, constructor, data, dictionary, externalTypeReference, glossaryParameter, group, imp,
    member, nested, ref, sfunction, streamconsumer, string, taggedUnion, type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
    }),
    'imports': d({
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
        }),
    },
    'asynchronous': {
        'interfaces': d({
        }),
        'algorithms': d({

        }),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({  }),
    },
}