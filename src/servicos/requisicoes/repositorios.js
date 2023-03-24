import api from "../api";

export async function PegarRepositoriosDoUsuarioPeloNome(id, nome){
    const resultado = await api.get(`/repos?postId=${postId}&name=${name}`).then(response => {
        return response.data;
    }).catch(error => {
        console.log(error);
        return [];
    })
    return resultado;
}

export async function pegarRepositoriosDoUsuario(id){
   try {
      const resultado = await api.get(`/repos?postId=${id}`)
      return resultado.data
   }
   catch (error){
      console.log(error)
      return []
   }
}

export async function salvarRepositoriosDoUsuario(postId, nome, data, id){
   try {
      await api.put(`/repos/${id}`, {
         name: nome,
         data: data,
         postID: postId,
         id: id
      })
      return  'sucesso'
   }
   catch (error){
      console.log(error)
      return 'erro'
   }
}