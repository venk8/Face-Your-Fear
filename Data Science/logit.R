a <- read.csv("full_file.csv")

a_female <- a[which(a[,15] == "female"), ]

a_male <- a[which(a[,15] == "male"), ]

b <- read.csv("class_out.csv")

b_female <- b[which(b[,11] == "female"), ]

b_male <- b[which(b[,11] == "male"), ]

model_1 <- glm(b_male[,1] ~ ., family = binomial(link = 'logit'), data = a_male[,c(1,7,10)])

model_2 <- glm(b_male[,2] ~ ., family = binomial(link = 'logit'), data = a_male[,c(2,3,4)])

model_3 <- glm(b_male[,3] ~ ., family = binomial(link = 'logit'), data = a_male[,c(3,6,11)])

model_4 <- glm(b_male[,4] ~ ., family = binomial(link = 'logit'), data = a_male[,c(1,7,9)])

model_5 <- glm(b_male[,5] ~ ., family = binomial(link = 'logit'), data = a_male[,c(3,4,5,8,11)])

model_6 <- glm(b_male[,6] ~ ., family = binomial(link = 'logit'), data = a_male[,c(3,7,8)])

model_7 <- glm(b_male[,7] ~ ., family = binomial(link = 'logit'), data = a_male[,c(4,5,7)])

model_8 <- glm(b_male[,8] ~ ., family = binomial(link = 'logit'), data = a_male[,c(3,11,12)])

model_9 <- glm(b_male[,9] ~ ., family = binomial(link = 'logit'), data = a_male[,c(3,7,8)])

model_10 <- glm(b_male[,10] ~ ., family = binomial(link = 'logit'), data = a_male[,c(10,14)])

model_11 <- glm(b_female[,1] ~ ., family = binomial(link = 'logit'), data = a_female[,c(1,7,8)])

model_12 <- glm(b_female[,2] ~ ., family = binomial(link = 'logit'), data = a_female[,c(3,4,8)])

model_13 <- glm(b_female[,3] ~ ., family = binomial(link = 'logit'), data = a_female[,c(3,6,11)])

model_14 <- glm(b_female[,4] ~ ., family = binomial(link = 'logit'), data = a_female[,c(1,9)])

model_15 <- glm(b_female[,5] ~ ., family = binomial(link = 'logit'), data = a_female[,c(3,4,8,11)])

model_16 <- glm(b_female[,6] ~ ., family = binomial(link = 'logit'), data = a_female[,c(3,4,8)])

model_17 <- glm(b_female[,7] ~ ., family = binomial(link = 'logit'), data = a_female[,c(3,4,5,8)])

model_18 <- glm(b_female[,8] ~ ., family = binomial(link = 'logit'), data = a_female[,c(7,8,11,12)])

model_20 <- glm(b_female[,10] ~ ., family = binomial(link = 'logit'), data = a_female[,c(10,13,14)])










