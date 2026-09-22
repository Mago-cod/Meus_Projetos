import os

print("Pasta atual:")
print(os.getcwd())

def analisar_log(nome_arquivo):

    erros = []
    warnings = []
    infos = []

    padroes_erro = [
        "ERROR",
        "EXCEPTION",
        "TIMEOUT",
        "SOAP FAULT",
        "RFC ERROR",
        "STATUS 500",
        "CONNECTION FAILED",
        "FALHA",
        "ABEND",
        "STACKTRACE"
    ]

    padroes_warning = [
        "WARNING",
        "WARN",
        "ALERTA",
        "CERTIFICATE EXPIRED",
        "SSL"
    ]

    padroes_info = [
        "INFO",
        "SUCCESS",
        "PROCESS COMPLETED",
        "PROCESSO FINALIZADO"
    ]

    try:

        with open(nome_arquivo, "r", encoding="utf-8") as arquivo:

            for numero_linha, linha in enumerate(arquivo, start=1):

                linha = linha.strip()
                linha_upper = linha.upper()

                encontrou = False

                for erro in padroes_erro:

                    if erro in linha_upper:

                        erros.append(
                            f"Linha {numero_linha}: {linha}"
                        )

                        encontrou = True
                        break

                if encontrou:
                    continue

                for aviso in padroes_warning:

                    if aviso in linha_upper:

                        warnings.append(
                            f"Linha {numero_linha}: {linha}"
                        )

                        encontrou = True
                        break

                if encontrou:
                    continue

                for info in padroes_info:

                    if info in linha_upper:

                        infos.append(
                            f"Linha {numero_linha}: {linha}"
                        )

                        break

        gerar_relatorio(erros, warnings, infos)

    except FileNotFoundError:

        print("Arquivo não encontrado.")
        print("Procurando por:", os.path.abspath(nome_arquivo))

    except Exception as erro:

        print(f"Erro: {erro}")


def gerar_relatorio(erros, warnings, infos):

    with open("relatorio.txt", "w", encoding="utf-8") as relatorio:

        relatorio.write("===== RESUMO =====\n\n")

        relatorio.write(f"INFO: {len(infos)}\n")
        relatorio.write(f"WARNING: {len(warnings)}\n")
        relatorio.write(f"ERROR: {len(erros)}\n\n")

        relatorio.write("===== ERROS =====\n")

        for erro in erros:
            relatorio.write(f"{erro}\n")

        relatorio.write("\n===== AVISOS =====\n")

        for aviso in warnings:
            relatorio.write(f"{aviso}\n")

        relatorio.write("\n===== INFORMACOES =====\n")

        for info in infos:
            relatorio.write(f"{info}\n")

    print("Relatório gerado com sucesso!")


analisar_log("log.txt")