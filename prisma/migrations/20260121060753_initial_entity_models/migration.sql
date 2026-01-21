-- CreateTable
CREATE TABLE "users" (
    "userId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT NOT NULL,
    "dni" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "wallets" (
    "walletId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "walletName" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "walletType" TEXT NOT NULL,
    CONSTRAINT "wallets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("userId") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "transactions" (
    "transactionId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "senderWalletId" INTEGER,
    "receiverWalletId" INTEGER,
    "amount" REAL NOT NULL,
    "transactionType" TEXT NOT NULL,
    "isRejected" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "transactions_senderWalletId_fkey" FOREIGN KEY ("senderWalletId") REFERENCES "wallets" ("walletId") ON DELETE NO ACTION ON UPDATE CASCADE,
    CONSTRAINT "transactions_receiverWalletId_fkey" FOREIGN KEY ("receiverWalletId") REFERENCES "wallets" ("walletId") ON DELETE NO ACTION ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_dni_key" ON "users"("dni");

-- CreateIndex
CREATE INDEX "wallets_userId_idx" ON "wallets"("userId");

-- CreateIndex
CREATE INDEX "transactions_senderWalletId_idx" ON "transactions"("senderWalletId");

-- CreateIndex
CREATE INDEX "transactions_receiverWalletId_idx" ON "transactions"("receiverWalletId");

-- CreateIndex
CREATE INDEX "transactions_createdAt_idx" ON "transactions"("createdAt");
