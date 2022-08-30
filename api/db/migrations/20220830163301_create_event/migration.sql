-- CreateTable
CREATE TABLE "Evento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "acerca" TEXT NOT NULL,
    "pelo" TEXT NOT NULL,
    "altura" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "when" DATETIME NOT NULL,
    "prerequisitos" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
