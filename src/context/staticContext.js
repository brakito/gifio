import React from 'react';

const Contexto = React.createContext({
  titulo: 'Esto se mostarra si no se usa Provider',
  provider: false
});

export default Contexto;