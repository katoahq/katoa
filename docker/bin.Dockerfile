ARG KATOA_VERSION=0.1.50

FROM buildpack-deps:20.04-curl AS download

ARG KATOA_VERSION
RUN set -eux; \
    curl -fsSL https://github.com/katoahq/katoa/releases/download/v${KATOA_VERSION}/katoa-x86_64-unknown-linux-musl.tar.gz --output katoa.tar.gz; \
    tar -xzf katoa.tar.gz; \
    rm katoa.tar.gz; \
    chmod 755 katoa

FROM scratch

ARG KATOA_VERSION
ENV KATOA_VERSION=${KATOA_VERSION}

COPY --from=download /katoa /katoa
