import { useState, useMemo } from "react";
import { UserShortInterface } from "data/@types/UserInterface"
import { ValidationService } from "data/services/ValidationServices";
import { ApiService } from "data/services/ApiService";

export default function useIndex() {
    const [cep, setCep] = useState('');
    const cepValido = useMemo(() => {
        return ValidationService.cep(cep)
    }, [cep]);
    const [erro, setErro] = useState('');
    const [buscaFeita, setBuscaFeita] = useState(false);
    const [carregando, setCarregando] = useState(false);
    const [diaristas, setDiaristas] = useState([] as UserShortInterface[]);
    const [diaristasRestantes, setDiaristasRestantes] = useState(0);

    async function buscarProfissionais(cep: string) {
        setBuscaFeita(false);
        setCarregando(true);
        setErro('');

        try {
            const { data } = await ApiService.get<{
                diaristas: UserShortInterface[],
                quantidade_diariastas: number
            }>('/api/diaristas-cidade?cep=' + cep.replace(/\D/g, ''));

            setDiaristas(data.diaristas);
            setDiaristasRestantes(data.quantidade_diariastas)
            setBuscaFeita(true);
            setCarregando(false);
        } catch (error) {
            setErro('Cep não encontrado');
            setCarregando(false);
        }
    }

    return {
        cep,
        setCep,
        cepValido,
        buscarProfissionais,
        erro,
        diaristas,
        buscaFeita,
        carregando,
        diaristasRestantes
    }

}