data <- read.csv("young.csv")

data_1 <- data[,-105]
data_1 <- data_1[,-104]
data_1 <- data_1[,-103]


k = 0

d <- numeric(10404)
relation <- cbind(d,d,d)


for(i in c(1:102)){
  for(j in c(1:102)){
    relation[k,1] <-cor(data_1[,i], data_1[,j], use = "na.or.complete")
    relation[k,2] <- i
    relation[k,3] <- j
    k=k+1
  }
}

write.csv(relation, "relation_bw_two_columns.csv")