function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "chatgpt.com") ||
        dnsDomainIs(host, "discord.com") ||
        dnsDomainIs(host, "codewhisperer.us-east-1.amazonaws.com") ||
        dnsDomainIs(host, "copilot-proxy.githubusercontent.com") ||
        dnsDomainIs(host, "origin-tracker.githubusercontent.com") ||
        dnsDomainIs(host, "www.useblackbox.io") ||
        dnsDomainIs(host, "www.blackbox.ai") ||
        dnsDomainIs(host, "api.tabnine.com") ||
        dnsDomainIs(host, "c2.p.tabnine.com") ||
        dnsDomainIs(host, "gitlab.com") ||
        dnsDomainIs(host, "augloop.office.com") ||
        dnsDomainIs(host, "api.openai.com") ||
        dnsDomainIs(host, "app.warp.dev") ||"
        dnsDomainIs(host, "translate.googleapis.com") ||
        dnsDomainIs(host, "substrate.office.com") ||
        dnsDomainIs(host, "sydney.bing.com") ||
        dnsDomainIs(host, "chatapi.supermaven.com") ||
        dnsDomainIs(host, "stream.supermaven.com") ||
        dnsDomainIs(host, "sourcegraph.com") ||
        dnsDomainIs(host, "cody-gateway.sourcegraph.com") ||
        dnsDomainIs(host, "capi.grammarly.com") ||
        dnsDomainIs(host, "www.perplexity.ai") ||
        dnsDomainIs(host, "api.anthropic.com") ||
        dnsDomainIs(host, "api.claude.ai") ||
        dnsDomainIs(host, "claude.ai") ||
        dnsDomainIs(host, "copilot.microsoft.com") ||
        dnsDomainIs(host, "apsaiservices.microsoft.com") ||
        dnsDomainIs(host, "api.jetbrains.ai") ||
        dnsDomainIs(host, "api.devin.ai") ||
        dnsDomainIs(host, "cloudcode-pa.googleapis.com") ||
        dnsDomainIs(host, "generativelanguage.googleapis.com") ||
        dnsDomainIs(host, "gemini.google.com") ||
        dnsDomainIs(host, "www.genspark.ai") ||
        dnsDomainIs(host, "www.notion.so") ||
        dnsDomainIs(host, "api.memo.satto.me") ||
        dnsDomainIs(host, "api.gen.qodo.ai") ||
        dnsDomainIs(host, "api2.cursor.sh") ||
        dnsDomainIs(host, "inference.codeium.com") ||
        dnsDomainIs(host, "server.codeium.com") ||
        shExpMatch(host, "*.self-serve.windsurf.com") ||
        dnsDomainIs(host, "chat.mistral.ai") ||
        shExpMatch(host, "*.openai.azure.com") ||
        shExpMatch(host, "bedrock-runtime.*.amazonaws.com") ||
        shExpMatch(host, "*-aiplatform.googleapis.com") ||
        shExpMatch(host, "*.githubcopilot.com") ||
        shExpMatch(host, "*.individual.githubcopilot.com") ||
        shExpMatch(host, "*.business.githubcopilot.com") ||
        shExpMatch(host, "*.enterprise.githubcopilot.com") ||
   	    shExpMatch(host, "*.kiro.dev") ||
        shExpMatch(host, "*.byteoversea.com") ||
        shExpMatch(host, "*.byteintlapi.com")
    ) {
        return "PROXY 127.0.0.1:3636; DIRECT";
    }
    return "DIRECT";
}
